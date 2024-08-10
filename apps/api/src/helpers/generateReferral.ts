import prisma from '@/prisma';
export async function generateReferralNumber() {
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length: number = 8;
  let referralCode: string = '';

  for (let i = 0; i < length; i++) {
    referralCode += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  const existingReferral = await prisma.user.findUnique({
    where: { referralCode: referralCode },
  });
  if (existingReferral) {
    return generateReferralNumber();
  }
  return referralCode;
}
