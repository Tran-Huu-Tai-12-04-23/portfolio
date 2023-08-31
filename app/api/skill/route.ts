import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import SkillController from '@/lib/controller/SkillController';

connectToDatabase();

export async function GET() {
    try {
        const data = await SkillController.get();
        return res.json({
            status: 200,
            message: 'Get data successfully!',
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
        const { nameSkill, linkImage, type } = body;
        if (!nameSkill || !type || !linkImage) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        let result = await SkillController.createNew(
            {
                name: nameSkill,
                linkImage: linkImage,
            },
            type,
        );

        console.log(result);

        if (result) {
            return res.json({ message: 'Add skill successfully', status: 200 });
        } else {
            return res.json({ message: 'Add skill failed', status: 500 });
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
        const type = query.get('type');
        const indexData = query.get('indexData');
        console.log(type, indexData);
        console.log('test');
        if (!type || !indexData) {
            return res.json({
                status: 400,
                message: 'Invalid data!',
            });
        }
        const result = await SkillController.remove(type, parseInt(indexData));
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
