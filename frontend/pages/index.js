import styles from '../styles/Home.module.css'

export default function Home({ json }) {
  return (
    <div>
      {JSON.stringify(json)}
    </div>
  )
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/');
  const json = await res.json();

  console.log(json)

  return {
    props: {
      json
    },
  }
}
