import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I buy cryptocurrency on this platform?',
      answer: 'To buy cryptocurrency, navigate to the Buy section, select the desired cryptocurrency, enter the amount you wish to purchase, and follow the instructions to complete the transaction.',
    },
    {
      question: 'Is it secure to trade with us ',
      answer: 'Yes, it is very secure to trade with us. We have a widely known reputtaion in the world of binance, we have won various award that hvae made us the best among the best our lines of award will tell you that we have acheieved alot of great things and we are prous to present ourselves to you as the best trading company you`ll ever come accross ranging from low commision among other many benefits of trading with uss we assure you the very best.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit/debit cards, bank transfers, and cryptocurrency deposits.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we prioritize the security and privacy of our users. We employ advanced encryption and security measures to safeguard your personal and financial information.',
    },
    {
      question: 'How can I sell cryptocurrency?',
      answer: 'To sell cryptocurrency, go to the Sell section, select the cryptocurrency you want to sell, specify the amount, and follow the instructions to complete the transaction. Funds will be transferred to your designated account.',
    },
    {
      question: 'Are there any fees associated with buying or selling cryptocurrency?',
      answer: 'Yes, there may be transaction fees associated with buying or selling cryptocurrency. The fees vary depending on the payment method and transaction volume. Please refer to our fee schedule for more information.',
    },
    {
      question: 'Can I transfer cryptocurrency to an external wallet?',
      answer: 'Yes, you can transfer cryptocurrency to an external wallet. Navigate to the Wallet section, select the cryptocurrency you wish to transfer, enter the recipient\'s wallet address, and specify the amount. Please ensure the wallet address is correct before initiating the transfer.',
    },
    {
      question: 'How long does it take for transactions to be processed?',
      answer: 'Transaction processing times vary depending on network congestion and the cryptocurrency being transacted. Typically, transactions are processed within minutes to a few hours. However, in some cases, it may take longer.',
    },
    {
      question: 'Is there a minimum/maximum limit for buying or selling cryptocurrency?',
      answer: 'Yes, there may be minimum and maximum limits for buying or selling cryptocurrency, depending on the payment method and transaction type. These limits are subject to change and may vary for different cryptocurrencies.',
    },
    {
      question: 'What should I do if I encounter an issue with my transaction?',
      answer: 'If you encounter any issues with your transaction, such as delays or errors, please contact our customer support team immediately. Provide as much detail as possible about the transaction, and we will assist you in resolving the issue.',
    },
    {
      question: 'Is cryptocurrency trading available 24/7?',
      answer: 'Yes, cryptocurrency trading is available 24/7 on our platform. You can buy, sell, or trade cryptocurrencies at any time, day or night, including weekends and holidays.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.question}</h2>
            <span className={`plus-sign ${activeIndex === index ? 'active' : ''}`}>+</span>
          </div>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};



export default FAQ
