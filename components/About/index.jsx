import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
  const path = "/me.webp";

  return (
    <section className={styles.container}>
      <h2> About</h2>
      <div className={styles.content}>
        <Image
          src="/me.webp"
          alt="Me"
          width={275}
          height={275}
          style={{ borderRadius: "50%" }}
        />
        <div className={styles.text}>
          <p>
            Since I started programming in college, in 2020 I dedicate myself
            completely to this exciting discipline. With a solid foundation in
            languages such as C and Python, I have acquired fundamental
            knowledge in programming.
          </p>
          <p>
            In recent years, I have specialized as a full stack in web
            development. With more than a year of experience, I have worked on
            creating Single Page Applications, ranging from Node.js backend to
            Next.js frontend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
