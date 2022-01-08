import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {

  const book = [{
    title: 'Quadrivium - The Four Classical Liberal Arts',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51sX0t1CqwL._SX258_BO1,204,203,200_.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  },
  {
    title: '100 Manga Artists',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81F1Oftq+jL.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  },
  {
    title: 'Neon Genesis Evangelion Vol. 1',
    image: 'https://images-na.ssl-images-amazon.com/images/I/512lPWTtToL._SX331_BO1,204,203,200_.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  }
  ];

  return (
    <>
      <Header />
      <div className="container">
        {/* Book Component Here */}
        <Book book={book} />
      </div>
      <Footer />
    </>
  );
}

export default App;