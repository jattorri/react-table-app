import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import axios from 'axios';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setvalue] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) => {
      setjobs(response.data);
      setloading(false);
      console.log(response);
    });
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setvalue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
