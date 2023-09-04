import { Header, Introduction, MapPanel, RecentNews } from "@/components";
import { INews } from "@/interfaces";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="p-14 pt-6 relative flex w-full justify-evenly divide-x divide-[#BBB]">
        <div className="w-[80%]">
          <Introduction />
          <div className="flex mt-5">
            <div className="w-[25%]"></div>
            <div className="w-[75%]">
              <MapPanel />
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <RecentNews data={news} />
        </div>
      </section>
    </main>
  );
}

const news: INews[] = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae perferendis doloribus vitae, repellat cupiditate et necessitatibus sequi hic. Beatae!",
    href: "https://www.middlesboronews.com/2023/07/24/psc-to-retire-several-coal-natural-gas-plants/",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta iusto ipsa perspiciatis aliquid minus cupiditate asperiores?",
    href: "https://www.middlesboronews.com/2023/07/24/psc-to-retire-several-coal-natural-gas-plants/",
  },
  {
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia recusandae reprehenderit iusto distinctio libero praesentium odio! Eius molestias, et assumenda quia nulla ut?",
    href: "https://www.middlesboronews.com/2023/07/24/psc-to-retire-several-coal-natural-gas-plants/",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam eos voluptates consequatur!",
    href: "https://www.middlesboronews.com/2023/07/24/psc-to-retire-several-coal-natural-gas-plants/",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis repudiandae quisquam, ex aspernatur unde fugiat aliquid eum!",
    href: "https://www.middlesboronews.com/2023/07/24/psc-to-retire-several-coal-natural-gas-plants/",
  },
];
