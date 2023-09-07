import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import ProjectController from '@/lib/controller/ProjectController';

connectToDatabase();

export async function GET(req: Request) {
    try {
        const query = new URL(req.url).searchParams;
        const projectId = query.get('projectId');
        if (!projectId) {
            return res.json({
                status: 400,
                message: 'Invalid data!',
            });
        }
        const data = await ProjectController.getAllDetailProject(projectId);
        if (data) {
            return res.json({
                status: 200,
                message: 'Get all project!',
                data: JSON.stringify(data),
            });
        }
        return res.json({
            status: 400,
            message: 'Get all project failed!',
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return res.error();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            name,
            description,
            linkSource,
            linkVideoDemo,
            listFrameWork,
            projectId,
            listImage,
            aboutProjects,
            linkWebsite,
        } = body;
        if (!name || !description || !linkSource) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        console.log({
            name,
            description,
            linkSource,
            linkVideoDemo,
            listFrameWork,
            projectId,
            listImage,
            aboutProjects,
            linkWebsite,
        });
        const data = {
            name,
            description,
            linkSource,
            linkVideoDemo,
            listFrameWork,
            listImage,
            aboutProjects,
            linkWebsite,
        };

        const result = await ProjectController.updateDetailProject(data, projectId);

        if (result) {
            return res.json({
                message: 'Save project detail successfully',
                status: 200,
            });
        } else {
            return res.json({ message: 'Save project detail failed', status: 500 });
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
