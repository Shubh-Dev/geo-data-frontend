import Form from '@/components/Form';

export default function Home() {
  const handleSubmit = () => {
    console.log('Submitting');
  };
  return (
    <div className="w-full">
      <Form formType="login" onSubmit={handleSubmit} />
    </div>
  );
}
