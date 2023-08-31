import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import ContactController from '@/lib/controller/ContactController';

connectToDatabase();

export async function GET() {
    try {
        const contact = await ContactController.get();
        return res.json({
            status: 200,
            message: 'Get all project!',
            contact: JSON.stringify(contact),
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return res.error();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, address, phoneNumber, country } = body;
        if (!email || !address || !phoneNumber || !country) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        const datContact = {
            email,
            address,
            phoneNumber,
            country,
        };

        const checkExist = await ContactController.checkExists();
        let result;
        if (!checkExist) {
            result = await ContactController.createNew(datContact);
        }
        if (checkExist) {
            result = await ContactController.update(datContact);
        }

        if (result) {
            return res.json({ message: 'Init contact successfully', status: 200 });
        } else {
            return res.json({ message: 'Init contact failed', status: 500 });
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
