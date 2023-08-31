import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import ExperienceController from '@/lib/controller/ExperienceController';

connectToDatabase();

export async function GET() {
    try {
        const data = await ExperienceController.getAll();
        return res.json({
            status: 200,
            message: 'Get all project!',
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return res.error();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, location, time, description } = body;
        if (!title || !location || !time || !description) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        const dataExperience = {
            title,
            location,
            time,
            description,
        };

        const result = await ExperienceController.createNew(dataExperience);

        if (result) {
            return res.json({
                message: 'Create new experience successfully',
                status: 200,
                data: JSON.stringify(result),
            });
        } else {
            return res.json({ message: 'Create new experience failed', status: 500 });
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
        const result = await ExperienceController.remove(id);
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
