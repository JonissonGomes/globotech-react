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
        <h1 className={"titleHome"}> Straming Dock</h1>
      </div>

      <div className={"containerMain"}>
        {plains.map((plan) => (
          <div className={"containerBorder"}>
            <h1 className={"labelTitlePlan"}>{plan.name}</h1>
            <p className={"describeText"}>{plan.description}</p>
            <p className={"labelTopics"}>
              Quantidade de telas:
              <p className={"labelContent"}>{plan.numberOfScreens}</p>
            </p>
            <p className={"labelContent"}>
              Tipo de plano:
              <p>{plan.type}</p>
            </p>
            <p className={"labelTopics"}>Valor</p>
            <p className={"price"}>R$ {plan.valor},00</p>

            <section className={"buttonGeneric"}>
              <p className={"buttonText"}>Ver detalhes </p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};
