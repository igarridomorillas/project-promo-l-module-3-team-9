const ShareCreated = (props) => {
  const tweetHashtag = encodeURIComponent("Adalab,promoL,PromoLee,frontend");
  return (
    <>
      <section className="created ">
        <h3 className="created__title">La tarjeta ha sido creada:</h3>
        <a className="created__url" href={props.shareCreated} target="_blank">
          <p className="created__link">Haz click aquí para ver tu tarjeta</p>
        </a>
        <button className="created__btnTwitter">
          <a
            href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20${props.shareCreated}&hashtags=${tweetHashtag}`}
            target="_blank"
            className="twitter"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>Compartir en
            twitter
          </a>
        </button>
      </section>
    </>
  );
};

export default ShareCreated;
