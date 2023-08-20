import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';

connectToDatabase();

export async function GET() {
    try {
        // const users = await UserController.getUsers();
        const data = { status: 200, body: 'Hello' };
        return res.json(data);
    } catch (error) {
        console.error('Error handling request:', error);
        return res.error();
    }
}

export async function POST(req: Request) {
    // try {
    //     const body = await req.json();
    //     const { idWallet } = body;
    //     const users = await UserController.connectWallet(idWallet);
    //     return res.json({
    //         status: 200,
    //         message: 'Connect successfully!',
    //         data: JSON.stringify(users),
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.next();
    //     return res.json({ error: 'Failed to create post', status: 500 });
    // }
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
