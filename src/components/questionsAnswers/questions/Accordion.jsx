/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../context/Product';

import AccordionItem from './AccordionItem';
import AnswerModal from '../answers/AnswerModal';

import { List } from './Styles';

const Accordion = ({ questions, height }) => {
  const {currentItem, productId, handleQuestionId} = useContext(ProductContext);
  const [answerModal, setAnswerModal] = useState(false);
  const [filterableQuestions, setFilterableQuestions] = useState([]);

  const handleAnswerModal = (id = 0) => {
    setAnswerModal(!answerModal);
    if (id !== 0) {
      handleQuestionId(id);
    }
  }

  const filterReported = id => {
    let filtered = questions.filter( q => q.question_id !== id );
    setFilterableQuestions(filtered);
  }

  return (
    <>
      <List height={height ? '50vh' : '90%'}>
        {filterableQuestions.length > 0 ?
          filterableQuestions.map(question=>(
            <AccordionItem
              key={question.question_id}
              question={question}
              handleAnswerModal={handleAnswerModal}
              filterReported={filterReported}
            />
          )) :
          questions.map(question=>(
            <AccordionItem
              key={question.question_id}
              question={question}
              handleAnswerModal={handleAnswerModal}
              filterReported={filterReported}
            />
          ))
        }
      </List>
      <AnswerModal
        answerModal={answerModal}
        handleAnswerModal={handleAnswerModal}
        item={currentItem}
      />
    </>
  )
}

export default Accordion;