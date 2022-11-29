import MinBlock from "../ui/minBlock";

export default function Entertainment({}) {
  let data = [
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: `Irrfan Khan’s Last film “ The Song of Scorpions” to release
            in 2021`,
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "Apee Karim blessed with a daughter",
    },
  ];
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="divide-y divide-primary-500">
        <h2 className="text-primary-500 font-header text-2xl py-4">
          Entertainment
        </h2>
        <div className="py-4">
          <div
            className="bg-center bg-cover h-[450px] items-end flex justify-start p-4 bg-[url('../public/images/16.jpg')]"
            // style="background-image: url('../assets/images/16.jpg')"
          >
            <div className="space-y-6">
              <a
                href="#"
                className="font-header text-2xl lg:text-4xl text-white"
              >
                Amanda Seyfried became ‘really obsessed’ with ghost stories
              </a>
              <p className="font-light opacity-75 max-w-lg text-white">
                Hollywood actress Amanda Seyfried has recalled the time when she
                became obsessed with ghost stories
              </p>
            </div>
          </div>
          <div className="my-4 grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0">
            {data.map((val) => {
              return (
                <MinBlock
                  key={val.caption}
                  headline={val.headline}
                  tagline={val.caption}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
