const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="md:my-[30px] md:mx-[100px] animate-fadeIn">
        <Component />
      </section>
    );
  };

export default SectionWrapper;
