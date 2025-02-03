type Props = {};
export default function Card({}: Props) {
  return (
    <li className="p-2 shadow rounded bg-white space-y-2">
      <img
        className="rounded"
        src="https://static.wixstatic.com/media/b34289_0b00d544f6504279b491b36616f2efe5~mv2_d_2040_1360_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b34289_0b00d544f6504279b491b36616f2efe5~mv2_d_2040_1360_s_2.jpg"
        alt=""
      />
      <h2 className="text-center">Card</h2>
    </li>
  );
}
