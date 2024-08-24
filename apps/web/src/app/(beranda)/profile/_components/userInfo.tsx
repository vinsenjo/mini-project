import Info from './info';
import { CgProfile } from 'react-icons/cg';
import { MdAlternateEmail } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';

export default function UserInfo() {
  return (
    <div className="lg:items-center grid flex-col  bg-white  ">
      <Info info="Username" value="my username" icon={<CgProfile />} />
      <Info
        info="Email"
        value="username@gmail.com"
        icon={<MdAlternateEmail />}
      />
      <Info info="Phone " value="023132131" icon={<TiContacts />} />
      <Info info="Referral Code " value="da32321das" icon={<TiContacts />} />
    </div>
  );
}
