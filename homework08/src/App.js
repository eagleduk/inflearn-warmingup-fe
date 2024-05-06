import { useState } from "react";

import classes from "./App.module.css";
import Dialog from "./Dialog";

function App() {
  const [selectBudget, setSelectBudget] = useState(null);

  const [onMessage, setOnMessage] = useState(null);
  const [budgets, setBudgets] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function handleTitleInputEvent(event) {
    setTitle(event.target.value);
  }

  function handlePriceInputEvent(event) {
    setPrice(+event.target.value);
  }

  function handleAddBudgetEvent(event) {
    const id = `${Date.now()}_${title}_${price}_${Math.random()}`;
    setBudgets((current) => [...current, { title, price, id }]);
    setTitle("");
    setPrice(0);
    setOnMessage({
      text: "등록",
      state: "success",
    });
  }

  function handleModifyBudgetEvent(id) {
    const selected = budgets.find((b) => b.id === id);
    setSelectBudget(selected);
    setTitle(selected.title);
    setPrice(selected.price);
  }

  function handleUpdateBudgetEvent(event) {
    setBudgets((current) =>
      current.map((c) => {
        if (c.id === selectBudget.id)
          return {
            ...c,
            title,
            price,
          };
        else return c;
      })
    );
    setSelectBudget(null);
    setTitle("");
    setPrice(0);
    setOnMessage({
      text: "수정",
      state: "update",
    });
  }

  function handleRemoveBudgetEvent(id) {
    setBudgets((current) => current.filter((c) => c.id !== id));
    setOnMessage({
      text: "삭제",
      state: "delete",
    });
  }

  function handleClearBudgetEvent() {
    setBudgets([]);
    setSelectBudget(null);
    setTitle("");
    setPrice(0);
    setOnMessage({
      text: "모두 삭제",
      state: "delete",
    });
  }

  let totalPrice = 0;

  return (
    <div className={classes.body}>
      {onMessage && (
        <Dialog
          onRemove={setOnMessage}
          text={onMessage.text}
          state={onMessage.state}
        />
      )}
      <h1> 예산 계산기 </h1>
      <div className={classes.content}>
        <form className={classes.content__inputs}>
          <div className={classes.content__input}>
            <label htmlFor="title">지출 항목</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="예) 렌트비"
              onChange={handleTitleInputEvent}
            />
          </div>

          <div className={classes.content__input}>
            <label htmlFor="price">비용</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={handlePriceInputEvent}
            />
          </div>
        </form>

        <div className={classes.content__actions}>
          {!selectBudget ? (
            <button className={classes.btn} onClick={handleAddBudgetEvent}>
              제출
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
              </svg>
            </button>
          ) : (
            <button className={classes.btn} onClick={handleUpdateBudgetEvent}>
              수정
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
              </svg>
            </button>
          )}
        </div>

        <ul className={classes.content__budgets}>
          {budgets.map((budget) => {
            totalPrice += budget.price;
            return (
              <li key={budget.id}>
                <span>{budget.title}</span>
                <span>{budget.price}</span>
                <div>
                  <button onClick={() => handleModifyBudgetEvent(budget.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button onClick={() => handleRemoveBudgetEvent(budget.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        {budgets.length > 0 && (
          <div className={classes.content__actions}>
            <button className={classes.btn} onClick={handleClearBudgetEvent}>
              목록 지우기
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className={classes.total}>총 지출: {totalPrice}원</div>
    </div>
  );
}

export default App;
