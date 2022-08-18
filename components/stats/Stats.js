import Icons from './Icons'

const styles = {
  section: 'w-3/4 my-24 px-60',
  container: 'flex flex-wrap justify-center text-center -mx-4 gap-y-1',
  item: 'flex flex-col w-full justify-center items-center w-1/4 md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0',
  h2: 'pt-4 pb-1 text-5xl md:text-5xl font-bold text-white tracking-tighter leading-tight',
  p: 'text-lg md:text-xl text-white font-medium'

}

const Stats = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Icons type='user' />
          <h2 className={styles.h2}>
            300k
          </h2>
          <p className={styles.p}>
            Projects completed
          </p>
        </div>
        <div className={styles.item}>
          <Icons type='artwork' />

          <h2 className={styles.h2}>
            52,5k
          </h2>
          <p className={styles.p}>
            Artworks
          </p>
        </div>
        <div className={styles.item}>
          <Icons type='palette' />

          <h2 className={styles.h2}>
            17.5k
          </h2>
          <p className={styles.p}>
            Artists
          </p>
        </div>
        <div className={styles.item}>
          <Icons type='wallet' />
          <h2 className={styles.h2}>
            35.58
          </h2>
          <p className={styles.p}>
            ETH Spent
          </p>
        </div>
      </div>
    </section>
  )
}

export default Stats