import Intro from '@/app/components/intro';

export default function Home() {
    return (
        <>
            <main className="flex pt-10 flex-col items-center px-4">
                <Intro type="default" data={null} />
            </main>
        </>
    );
}
