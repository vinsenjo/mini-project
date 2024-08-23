// /pages/index.tsx
import { GetServerSideProps } from 'next';
import Pagination from './pagination';


// type Event = {
//   id: number;
//   name: string;
//   date: string;
//   price: number;
//   seats: number;
//   image: string | null;
// };

type Props = {
  events: Event[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const Pag: React.FC<Props> = ({ events, totalPages, currentPage, hasNextPage, hasPrevPage }) => {
  return (
    <div>
      {/* <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Price: ${event.price}</p>
            <img src={event.image ?? '/default-image.png'} alt={event.name} />
          </li>
        ))}
      </ul> */}
      <Pagination
        page={currentPage.toString()}
        totalPages={totalPages}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page ? parseInt(context.query.page as string, 10) : 1;

  const response = await fetch(`http://localhost:3000/api/events?page=${page}`);
  const data = await response.json();

  return {
    props: {
      events: data.event || [],
      totalPages: data.totalPages || 2,
      currentPage: page,
      hasNextPage: page < data.totalPages,
      hasPrevPage: page > 1,
    },
  };
};

export default Pag 
