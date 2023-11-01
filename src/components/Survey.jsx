import { useState } from "react";

const INITIAL_STATE = {
  features: "",
  worstBits: "",
  consistency: "",
  color: "",
  logo: "",
  spendTime: "",
  anythingElse: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChanges = (event) => {
    const { name, type, id, checked, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandle = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form class="form" onSubmit={submitHandle}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say are the best features of your duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                    checked={form.spendTime === "swimming"}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="bathing"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="chatting"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="noTime"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>

            <h3>What would you say are the worst bits of your duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="bathing"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="chatting"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="noTime"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <div class="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="consistency-four">4</label>
              </li>
            </ul>

            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="color-four">4</label>
              </li>
            </ul>

            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  onChange={(event) => {
                    handleChanges(event);
                  }}
                />
                <label for="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={(event) => {
                      handleChanges(event);
                    }}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={(event) => {
                handleChanges(event);
              }}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={form.name}
              onChange={(event) => {
                handleChanges(event);
              }}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => {
                handleChanges(event);
              }}
            />
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
