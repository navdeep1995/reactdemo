import logo from './logo.svg';
import './App.css';
import Button from './Container/Button';
import Loading from './Container/Loading';
import NewsItem from './Container/NewsItem';

function App() {
  return (
    <div className="App">
   <Button/>
   <Loading/>
    <NewsItem/>
    </div>
  );
}

export default App;
