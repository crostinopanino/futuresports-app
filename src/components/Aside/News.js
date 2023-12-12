import React from 'react';
import withBackground from './withBackground';

const newsArticles = [
    { title: 'Article 1', content: 'Nunc sit amet suscipit eros. Maecenas tempus libero ac placerat pulvinar. Proin malesuada suscipit leo, in suscipit sem viverra at. Quisque elit mi, mollis nec eros id, elementum ullamcorper nunc.' },
    { title: 'Article 2', content: 'Cras dapibus auctor sapien, at bibendum arcu tincidunt finibus. In eu finibus ligula. Phasellus at condimentum diam. Aliquam tellus massa, eleifend a ex vel, aliquam scelerisque lacus.' },
    { title: 'Article 3', content: 'Etiam gravida sit amet turpis vitae imperdiet. Phasellus at posuere enim, vitae faucibus mauris. Integer blandit quam leo, nec elementum orci gravida ut. ' },
    { title: 'Article 4', content: 'In tempus, lectus a gravida sagittis, nisi lacus varius sapien, imperdiet porttitor quam felis sit amet enim. Nunc lorem justo, ornare non maximus ac, congue at ex.' },
  ];
  
  const News = () => {
    const backgroundColors = ['#435660', '#567890', '#678901', '#789012'];

    return (
    <section id="news">
      <h2>Latest News</h2>
      <div className="row"> 
        {newsArticles.map((article, index) => (
          <div key={index} className="news-article" style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
        };
        
export default withBackground(News); 