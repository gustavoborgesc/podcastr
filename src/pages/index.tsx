export default function Home({ episodes }) {
    return (
        <>
            <h1>Index</h1>
            <p>{JSON.stringify(episodes)}</p>
        </>
    );
}

export async function getStaticProps() {
    let reponse: Response;
    let data = [];
    try {
        reponse = await fetch("http://localhost:3333/episodes");
        data = await reponse.json();
    } catch (error) {
        console.log(`Home:getStaticProps:error: ${error}`);
        data = [];
    }

    return {
        props: {
            episodes: data || [],
        },
        revalidate: 60 * 60 * 8,
    };
}
