import Intro from '@/app/components/intro';

export default function Home() {
    return (
        <>
            <main className="flex pt-10 flex-col items-center overflow-hidden w-screen">
                <Intro type="default" data={null} />
            </main>
        </>
    );
}
