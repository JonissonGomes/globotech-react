import "./index.css";

export const Home = () => {
  let plains = [
    {
      name: "Basic",
      description:
        "Este é um plano voltado para pessoas que não consomem tanto conteúdo da streaming, porém quer estar por dentro dos assuntos",
      sponsors: "Assista o quanto quiser. Sem anúncios",
      recomendation: "Recomendações especialmente para você.",
      cancellationTime: "15 dias",
      valor: 15,
      numberOfScreens: 2,
      type: "Mensal",
      resolution: "480p",
    },
    {
      name: "Premium",
      description:
        "Este é um plano voltado para pessoas que consomem tanto conteúdo da streaming, porém está com pouco tempo mas quer ficar por dentro dos assuntos",
      sponsors: "Assista o quanto quiser. Sem anúncios",
      recomendation: "Recomendações especialmente para você.",
      cancellationTime: "7 dias",
      valor: 35,
      numberOfScreens: 3,
      type: "Mensal/Anual",
      resolution: "720p",
    },
    {
      name: "Premium+",
      description:
        "Este é um plano voltado para pessoas que não podem ficar longe da streamins",
      sponsors: "Assista o quanto quiser. Sem anúncios",
      recomendation: "Recomendações especialmente para você.",
      cancellationTime: "Qualquer momento",
      valor: 50,
      numberOfScreens: 4,
      type: "Anual",
      resolution: "1080p",
    },
  ];
  return (
    <>
      <div>
        <h1 className={"titleHome"}> Escolha o plano que ajusta no seu bolso: </h1>
      </div>

      <div className={"containerMain"}>
        {plains.map((plan) => (
          <div className={"containerBorder"}>
            <h1 className={"labelTitlePlan"}>{plan.name}</h1>
            <p className={"describeText"}>{plan.description}</p>
            <section className={'containerInformations'}>
              <p className={"labelTopics"}>
                <p className="labelTitle">Quantidade de telas:</p>
                <p className={"labelContent"}>{plan.numberOfScreens} telas simultâneas</p>
              </p>

              <p className={"labelTopics"}>
                <p className="labelTitle">Anúncios:</p>
                <p className={"labelContent"}>{plan.sponsors}</p>
              </p>

              <p className={"labelTopics"}>
                <p className="labelTitle">Recomendações de filmes/séries:</p>
                <p className={"labelContent"}>{plan.recomendation}</p>
              </p>

              <p className={"labelTopics"}>
                <p className="labelTitle">Prazo de cancelamento:</p>
                <p className={"labelContent"}>{plan.cancellationTime}</p>
              </p>

              <p className={"labelTopics"}>
                <p className="labelTitle">Tipo de plano:</p>
                <p className={"labelContent"}>{plan.type}</p>
              </p>
            </section>
            <p className={"labelPrice"}>A partir</p>
            <section className={"contentPrice"}>
                <p className={'cifra'}>R$ </p>
                <p className={"price"}>{plan.valor},00</p>
            </section>

            <section className={"buttonGeneric"}>
              <p className={"buttonText"}>Ver detalhes </p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};
