import { title } from "@/components/primitives";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { Title } from "@/components/Title/Title";

import { cardConfig } from "@/config/cards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Title top='This site -'
             main='API BAY '
             bottom=' is a comprehensive hub for API utilities, offering a variety of tools.'
      />
      <CardContainer cards={cardConfig.cardsApiList}/>
    </section>
  );
}
