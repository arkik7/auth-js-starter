import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Is this template free?',
    answer: 'Yes. It is a free starter version of this template.',
    value: 'item-1',
  },
  {
    question: 'Do you have a more advanced version of this template?',
    answer: 'Not yet, but might create one in the future.',
    value: 'item-2',
  },
  {
    question: 'Can you create a custom template for me?',
    answer: 'Yes, feel free to reach me via my website or LinkedIn and we can agree on next steps.',
    value: 'item-3',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    value: 'item-4',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
    value: 'item-5',
  },
];

const FAQs = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Frequently Asked{' '}
          <span className="bg-gradient-to-b from-blue-500 to-primary text-transparent bg-clip-text">Questions</span>
        </h2>
        <p className="mt-1 text-muted-foreground">Some of real questions and some lorem ipsum 😜</p>
      </div>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{' '}
        <Link
          rel="noreferrer noopener"
          target="_blank"
          href="https://arkikod.com/contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact me
        </Link>
      </h3>
    </section>
  );
};

export default FAQs;
