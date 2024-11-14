// guard
import GuestGuard from 'src/guards/guest';
//  components
import ForgetPasswordMain from 'src/components/_main/auth/forgetPassword';

// Meta information
export const metadata = {
  title: 'Forgot Password | Net to Plate - Reset Your Password and Regain Access',
  description:
    'Forgot your password? Reset it with Net to Plate for seamless access to your account. Regain control and enjoy hassle-free browsing, secure transactions, and personalized experiences. Get back on track with Net to Plate now!',
  applicationName: 'Net to Plate',
  authors: 'Net to Plate',
  keywords:
    'forgot password, Net to Plate, reset password, Net to Plate password recovery, password reset, password recovery, account access, regain access, secure login, secure access, hassle-free login, personalized login, password recovery tool, forgotten password'
};

export default function ForgetPassword() {
  return (
    <>
      <GuestGuard>
        <ForgetPasswordMain />
      </GuestGuard>
    </>
  );
}
