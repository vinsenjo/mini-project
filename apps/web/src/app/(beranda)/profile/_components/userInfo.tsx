import { getUser } from '@/libs/actions/user';
import Info from './info';
import { CgProfile } from 'react-icons/cg';
import { MdAlternateEmail } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';

export default async function UserInfo() {
  const data = await getUser();
  const user = data.result.data
  return (
    <div className="grid justify-center bg-white py-6 lg:pl-32 ">
      <Info info="Username" value={user.username} icon={<CgProfile />} />
      <Info
        info="Email"
        value={user.email}
        icon={<MdAlternateEmail />}
      />
      <Info info="Phone " value={user.phoneNumber} icon={<TiContacts />} />
      <Info info="Referral Code " value={user.referralCode} icon={<TiContacts />} />
    </div>
  );
}
