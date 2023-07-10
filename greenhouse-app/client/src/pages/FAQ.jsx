import styled from "@emotion/styled";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

// assets
import HeroImage from "../assets/searchbackground.png";

// components
import SectionTitle from "../components/shared/SectionTitle";

export default function FAQ() {
  const questions = [
    {
      id: 1,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 2,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 3,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 4,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 5,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 6,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 7,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 8,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 9,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
    {
      id: 10,
      question: "Before you get started",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur nobis possimus voluptas magnam assumenda. Fuga odit facere veritatis praesentium!. odit facere veritatis praesentium",
    },
  ];

  return (
    <MainWrapper>
      <SectionTitle title="FAQ" />
      <img src={HeroImage} alt="" />
      <div className="content">
        <Accordion className="accordion">
          {questions.map((q) => {
            return (
              <AccordionItem className="accordion-item" key={q.id}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" className="title">
                      {q.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{q.answer}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  img {
    margin: 40px 0;
  }

  .accordion {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .accordion-item {
    border: 1px solid var(--light-bg);
    padding: 10px;
    border-radius: 5px;
    flex: 1 1 500px;

    .title {
      font-weight: bold;
      color: var(--green-medium);
    }
  }
`;
