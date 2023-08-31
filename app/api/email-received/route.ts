import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import EmailReceivedController from '@/lib/controller/EmailReceivedController';

connectToDatabase();

export async function GET() {
    try {
        const data = await EmailReceivedController.getAll();
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
        const { email, message } = body;
        if (!email || !message) {
            return res.json({ error: 'invalid data', status: 500 });
        }

        let result = await EmailReceivedController.createNew({
            from: email,
            message,
        });

        if (result) {
            return res.json({ message: 'Send email successfully', status: 200 });
        } else {
            return res.json({ message: 'Send email failed', status: 500 });
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
    } catch (error) {
        console.log(error);
        res.next();
        return res.json({ error: 'Failed to create post', status: 500 });
    }
}
