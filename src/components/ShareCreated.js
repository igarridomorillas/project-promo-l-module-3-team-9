const ShareCreated = (props) => {
  return (
    <>
      <section className="created js-created created--hidden">
        <h3 className="created__title">La tarjeta ha sido creada:</h3>
        <a className="created__url js-card-result" href=""></a>
        <button className="created__btnTwitter">
          <a
            href="https://twitter.com/?lang=es"
            target="_blank"
            className="twitter"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i> Compartir en
            twitter
          </a>
        </button>
      </section>
    </>
  );
};

export default ShareCreated;
