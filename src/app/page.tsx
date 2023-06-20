'use client';

import { useAppSelector } from '../store/hooks';
import Search from '../components/Search';

const Home = () => {
  const fetchStatus = useAppSelector((state) => state.list.fetchStatus);
  const errorData = useAppSelector((state) => state.list.errorData);
  const dataCharacters = useAppSelector((state) => state.list.dataCharacters);

  console.log(fetchStatus, errorData, dataCharacters);

  return <Search />;
};

export default Home;
