import Banner from 'src/components/banner/Banner';
import TopPicks from 'src/components/topPicks/TopPicks';

const Home = () => {
  return (
    <div>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 mt-10">Top Picks</h2>

          <TopPicks />
        </section>
      </main>
    </div>
  );
};

export default Home;
