import styled from "@emotion/styled";


// components
import SectionTitle from "../components/shared/SectionTitle";

// assets
import HeroImage from "../assets/searchbackground.png";

export default function About() {
  return (
    <MainWrapper>
      <SectionTitle title="About Us" />
      <img src={HeroImage} alt="" />
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit
          molestias voluptatibus sunt at facilis, veniam excepturi quisquam id
          enim pariatur vel officiis reprehenderit assumenda porro quas a.
          Dolorum beatae unde explicabo quaerat alias possimus totam delectus
          earum ut, ratione est quidem velit. Nihil optio illum reprehenderit
          ipsum tempora impedit voluptates sequi nemo, asperiores quisquam
          expedita quis, doloribus consequuntur non in numquam quidem placeat!
          Aliquam ratione, amet beatae aperiam quibusdam repellat deleniti
          consequatur iusto, deserunt repudiandae soluta corrupti. Ipsum
          reprehenderit porro cupiditate distinctio, earum tempore non aliquid,
          id facere consequuntur culpa officiis corporis error odit sit nemo
          consectetur facilis est.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          nihil dolorem quisquam quam, sapiente debitis harum molestias aperiam
          numquam pariatur cupiditate aspernatur ipsam sed iure? Cum suscipit
          fuga, ipsum assumenda error animi at? Facere ullam, labore voluptate
          eum optio consequatur quasi molestiae, illo assumenda consequuntur
          inventore aliquam. Voluptatem earum non vel debitis fugit vitae
          sapiente pariatur, placeat, voluptatibus eos voluptas quidem facilis
          nostrum blanditiis doloribus dolores ratione magni labore molestiae
          atque assumenda, nihil animi molestias ullam. Obcaecati maiores
          veritatis quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          deserunt vero quae officia maxime illo sequi maiores earum similique
          repudiandae eos quaerat temporibus rem quibusdam ullam corporis
          ducimus beatae eveniet hic eligendi tenetur id dicta quos amet. Ullam,
          vel libero odio voluptatum accusantium officiis praesentium eum facere
          expedita autem, blanditiis natus dolores voluptate, animi explicabo
          nesciunt error dolorum? Tempore vel, beatae libero necessitatibus
          ullam vitae ea culpa reprehenderit velit a voluptatem architecto
          quidem, nisi maxime doloribus alias nesciunt saepe quo incidunt quos
          voluptatibus distinctio, excepturi fuga inventore! Deleniti deserunt
          alias, totam facilis fuga omnis labore quasi laudantium officiis
          explicabo, quidem voluptas, atque harum nisi recusandae ipsam quo
          beatae modi. Voluptatem alias nisi velit nesciunt et, repellendus ab
          dolore placeat tempore!
        </p>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  img {
    margin: 20px 0 40px;
    max-width: 100%;
    min-height: 150px;
  }
`;
