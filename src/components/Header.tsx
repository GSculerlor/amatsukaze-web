import TexasIcon from "./TexasIcon";

export default function Header() {
  return (
    <div>
      <h1 className='text-on-surface text-5xl mb-6'>
        <a>Ganendra Afrasya Salsabilla</a>
      </h1>
      <p className='text-on-surface text-base mb-1'>associate android developer at <a href='https://virgoku.id' className='font-semibold'>Virgo</a>.
      I code things like android apps and games sometimes. a casual rhythm game player. 
      </p>
      <div className="flex flex-row mb-6 items-center">
      <p className='text-on-surface text-base'>based</p>
        <div className="flex-none ml-1"><TexasIcon /></div>
        <p className='text-on-surface text-base'> <a href='https://arknights.fandom.com/wiki/Texas' className='font-semibold'>Texas</a> fanboi.</p>
      </div>
    </div>
  );
}