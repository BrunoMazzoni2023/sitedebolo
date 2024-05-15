import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CakeCard from './CakeCard';
import CakeDetail from './CakeDetail'; // Importe o novo componente

const cakes = [
  {
    name: 'Bolo de Chocolate',
    description: `
      
      <h4>Detalhes:</h4>
      <ul>
        <li><strong>Tamanho:</strong> 800 ml</li>
        <li><strong>Validade:</strong> 1 semana</li>
        <li><strong>Conservação:</strong> Mantenha refrigerado</li>
        <li><strong>Preço:</strong> R$ 25.00</li>
      </ul>
      <h4>Ingredientes:</h4>
      <ul>
        <li><strong>Massa:</strong> farinha de trigo, açúcar, ovos, chocolate em pó, manteiga, leite, fermento em pó</li>
        <li><strong>Recheio:</strong> brigadeiro cremoso com chocolate belga, ganache de chocolate meio amargo, beijinho de coco, creme de avelã</li>
        <li><strong>Cobertura:</strong> raspas de chocolate, granulado, morangos frescos, chantilly</li>
      </ul>
      <h4>Saboreie a magia do bolo de chocolate caseiro em um potinho prático e delicioso!</h4>
      <p>Nossos bolos no pote são feitos com ingredientes frescos e de alta qualidade, garantindo um sabor irresistível e uma textura úmida e macia. Cada mordida é uma explosão de sabor que vai te conquistar do primeiro ao último suspiro.</p>
      <h4>Por que escolher nossos bolos no pote?</h4>
      <ul>
        <li><strong>Sabor incomparável:</strong> Utilizamos ingredientes de alta qualidade e receitas cuidadosamente elaboradas para garantir um sabor único e irresistível</li>
        <li><strong>Praticidade e conveniência:</strong> Nossos bolos no pote são práticos e convenientes, perfeitos para quem tem um dia a dia corrido</li>
        <li><strong>Frescor garantido:</strong> Produzimos nossos bolos no pote diariamente, garantindo frescor e sabor incomparáveis</li>
        <li><strong>Embalagem segura:</strong> Embalamos nossos bolos no pote com todo cuidado para garantir que cheguem até você em perfeitas condições</li>
        <li><strong>Atendimento personalizado:</strong> Oferecemos atendimento personalizado para atender às suas necessidades e garantir sua satisfação</li>
      </ul>
      <p>Encomende já os seus bolos no pote e experimente o sabor da felicidade!</p>
    `,
    image: 'https://media.discordapp.net/attachments/830846315751276597/1240107003100270685/bolochocolate.jpg?ex=66455b25&is=664409a5&hm=7a5782fb3a26c020e94875729e6265b212e3fe9d5c46a4e5642f74cda3f41b6d&=&format=webp&width=706&height=592',
    
  },
  {
    name: 'Bolo de Morango',
    description: `
  
      <ul>
      <li>Tamanho: [800 ml]</li>
      <li>Validade: [1 semana]</li>
      <li>Conservação: Mantenha refrigerado.</li>
      <li>Preço: [R$ 25.00]</li>
    </ul>
      <h4>Saboreie a magia do bolo de chocolate caseiro em um potinho prático e delicioso!</h4>
      <p>Nossos bolos no pote são feitos com ingredientes frescos e de alta qualidade, garantindo um sabor irresistível e uma textura úmida e macia. Cada mordida é uma explosão de sabor que vai te conquistar do primeiro ao último suspiro.</p>
     
      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>Massa: farinha de trigo, açúcar, ovos, chocolate em pó, manteiga, leite, fermento em pó.</li>
        <li>Recheio: brigadeiro cremoso com chocolate belga, ganache de chocolate meio amargo, beijinho de coco, creme de avelã.</li>
        <li>Cobertura: raspas de chocolate, granulado, morangos frescos, chantilly.</li>
      </ul>

      <p><strong>Por que escolher nossos bolos no pote?</strong></p>
      <ul>
        <li>Sabor incomparável: Utilizamos ingredientes de alta qualidade e receitas cuidadosamente elaboradas para garantir um sabor único e irresistível.</li>
        <li>Praticidade e conveniência: Nossos bolos no pote são práticos e convenientes, perfeitos para quem tem um dia a dia corrido.</li>
        <li>Frescor garantido: Produzimos nossos bolos no pote diariamente, garantindo frescor e sabor incomparáveis.</li>
        <li>Embalagem segura: Embalamos nossos bolos no pote com todo cuidado para garantir que cheguem até você em perfeitas condições.</li>
        <li>Atendimento personalizado: Oferecemos atendimento personalizado para atender às suas necessidades e garantir sua satisfação.</li>
      </ul>
      <p>Encomende já os seus bolos no pote e experimente o sabor da felicidade!</p>
    `,
    image: 'https://media.discordapp.net/attachments/830846315751276597/1240107002525384805/bolomorango.jpeg?ex=66455b25&is=664409a5&hm=38ed22d6537a3f5ca67a8fd8dae876af970bb1c5fe16e77a8b140543a8e1de8c&=&format=webp&width=888&height=592'
  },
  {
    name: 'Bolo de Cenoura',
    description: 'Um clássico bolo de cenoura com cobertura de chocolate.',
    image: 'https://media.discordapp.net/attachments/830846315751276597/1240107018610806846/bolocenoura.jpg?ex=66455b29&is=664409a9&hm=1dfd3c97ea871ee1e91954675eb60d9d3e1a52981874465bb35656b86e1b03f2&=&format=webp&width=1026&height=592'
  },
  {
    name: 'Bolo Red Velvet',
    description: 'Bolo macio e úmido com uma cor vermelha rica e cobertura de cream cheese.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Limão',
    description: 'Bolo leve e refrescante com cobertura de glacê de limão.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Coco',
    description: 'Bolo úmido com sabor de coco e cobertura de coco ralado.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Nozes',
    description: 'Bolo rico com nozes picadas e cobertura de caramelo.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Maçã',
    description: 'Bolo de maçã com canela, perfeito para uma tarde de outono.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Baunilha',
    description: 'Bolo clássico de baunilha com cobertura de glacê de baunilha.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Bolo de Abacaxi',
    description: 'Bolo úmido com pedaços de abacaxi e cobertura de creme de queijo.',
    image: 'https://via.placeholder.com/300x200'
  }
];






function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Cardápio de Bolos</h1>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página de detalhes de cada bolo */}
          {cakes.map((cake, index) => (
            <Route key={index} path={`/cakes/${cake.name}`} element={<CakeDetail cake={cake} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
    {cakes.map((cake, index) => (
      <CakeCard key={index} cake={cake} />
    ))}
  </div>
);

export default App;
