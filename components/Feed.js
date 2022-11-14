import Stories from './Stories';

const Feed = () => {
  return (
    <main className="grid grid-cols-1 w-11/12 md:grid-cols-2 xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        {/* Posts */}
      </section>

      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
