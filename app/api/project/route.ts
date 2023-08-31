import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import ProjectController from '@/lib/controller/ProjectController';

connectToDatabase();

export async function GET() {
    try {
        const data = await ProjectController.getAll();
        return res.json({
            status: 200,
            message: 'Get all project!',
            projects: JSON.stringify(data),
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return res.error();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, description, linkSource, linkVideoDemo, projectImageLink, listFrameWork } = body;
        if (!name || !description || !linkSource || !linkVideoDemo || !projectImageLink || !listFrameWork) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        const intiIntro = {
            name,
            description,
            linkSource,
            linkVideoDemo,
            projectImageLink,
            listFrameWork,
        };

        const result = await ProjectController.createNew(intiIntro);

        if (result) {
            return res.json({ message: 'Init intro successfully', status: 200, project: JSON.stringify(result) });
        } else {
            return res.json({ message: 'Init intro failed', status: 500 });
        }
    } catch (error) {
        console.log(error);
        res.next();
        return res.json({ error: 'Failed to create post', status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const query = new URL(req.url).searchParams;
        const id = query.get('id');

        if (!id) {
            return res.json({
                status: 400,
                message: 'Invalid data!',
            });
        }

        const result = await ProjectController.remove(id);

        if (result) {
            return res.json({
                status: 200,
                message: 'Remove project successfully!',
            });
        } else {
            return res.json({
                status: 500,
                message: 'Remove project failed!',
            });
        }
    } catch (error) {
        console.log(error);
        res.next();
        return res.json({ error: 'Failed to create post', status: 500 });
    }
}
