import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
import AboutController from '@/lib/controller/AboutController';

connectToDatabase();

export async function GET() {
    try {
        const data = await AboutController.get();
        return res.json({
            status: 200,
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
        const { name, age, address, email, nation, tag, description, aboutImageLink } = body;

        const initAbout = {
            name,
            age,
            address,
            email,
            nation,
            tag,
            description,
            aboutImageLink,
        };

        const checkExist = await AboutController.checkExists();
        let result;
        if (!checkExist) {
            result = await AboutController.createNew(initAbout);
        }
        if (checkExist) {
            result = await AboutController.update(initAbout);
        }

        if (result) {
            return res.json({ message: 'Init about successfully', status: 200 });
        } else {
            return res.json({ message: 'Init about failed', status: 500 });
        }
    } catch (error) {
        console.log(error);
        res.next();
        return res.json({ error: 'Failed to create post', status: 500 });
    }
}

export async function DELETE(req: Request) {
    // const query = new URL(req.url).searchParams;
    // const id = query.get('id');
    // try {
    //     // const deletedPost = await Post.findByIdAndDelete(id);
    //     // return res.json(deletedPost);
    //     return res.json({ status: 200, message: 'hello' });
    // } catch {
    //     return res.json({ error: 'Failed to remove post', status: 500 });
    // }
}
