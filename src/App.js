import selfpic from './shreyashi_pic.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Sai Shreyashi Penugonda</h3>
        <img src={selfpic} className="App-logo" alt="selfpic" />
        <p>The field of Computer Supported Cooperative Work(CSCW) is something that is elemental to computing in current times and 
          my goal is to learn more about it. Collaborative and Cooperative work ensure the advancement of technology and humankind in general, being a Computer Science graduate student at the beginning of a career in this field, I believe this subject would help me build solutions and applications which would use the concepts taught in this course in further implementations.</p>
      </header>
      <hr></hr>
      <div className="LeftAl">
        <p>Please find below the list of collaborative software utilized by me:</p>
        <ol>
          <li>Overleaf for document collaboration</li>
          <li>Google products and services like Google Docs, Drive, Sheets and Calender</li>
          <li>Video and audio calling services like Zoom and Skype</li>
          <li>Multi-service collaboration platform like Microsoft Teams, Slack, Microsoft TFS and JIRA</li>
          <li>Code collaboration using GitHub and Gitlab</li>
          <li>Social media and discussion forums/platforms like LinkedIn, Facebook, Instagram, Reddit and Discord</li>
        </ol>
      </div>
      <hr></hr>
      <div className="LeftAl">
        <hr></hr>
        <p>Please find below the list of features of the collaborative softwares utilized by me:</p>
          <ol>
            <li>Collaborative writing</li>
            <li>Document collaboration</li>
            <li>Meeting scheduling</li>
            <li>Code collaboration and version control in teams</li>
            <li>Work and education coordination</li>
            <li>Collaborating over knowledge, news and other aspects</li>
            <li>Work management and task assigmments</li>
          </ol>
        <p>Some things that could get better with time are: lag in syncronization when parallelly multiple parties are working on for example a document or when playing games  </p>
        <ol>
            <li>Security concerns</li>
            <li>More intuitive and easier UI for some applications</li>
            <li>Additional features for customized collaboration</li>
            <li>Lessening of human interaction (face-to-face and actual communication)</li>
          </ol>
      </div>
     
    </div>
  );
}

export default App;