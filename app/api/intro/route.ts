import { NextResponse as res } from 'next/server';
import { connectToDatabase } from '@/lib/config';
// import UserController from '@/app/lib/controller/UserController';
import IntroController from '@/lib/controller/IntroController';

connectToDatabase();

export async function GET() {
    try {
        const data = await IntroController.get();
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
        const {
            name,
            description,
            avatar,
            facebookLink,
            youtubeLink,
            instagramLink,
            githubLink,
            tiktokLink,
            linkedLink,
            cv,
        } = body;

        const intiIntro = {
            name,
            description,
            avatar,
            facebookLink,
            youtubeLink,
            instagramLink,
            githubLink,
            tiktokLink,
            linkedLink,
            cv,
        };

        const checkExist = await IntroController.checkExists();
        let result;
        if (!checkExist) {
            result = await IntroController.createNew(intiIntro);
        }
        if (checkExist) {
            result = await IntroController.update(intiIntro);
        }

        if (result) {
            return res.json({ message: 'Init intro successfully', status: 200 });
        } else {
            return res.json({ message: 'Init intro failed', status: 500 });
        }
    } catch (error) {
        console.log(error);
        res.next();
        return res.json({ error: 'Failed to create post', status: 500 });
    }
}
