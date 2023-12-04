import Container from "@/components/ui/container";

export default function PrivacyPolicy() {
  return (
    <section>
      <Container>
        <div className="my-6 mx-4 md:mx-8 lg:mx-20">
          <div>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p className="font-light">Last updated: 04/12/2023</p>
          </div>
          <div className="font-semibold">
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of Personal Information when you use our
              Service.
            </p>
            <p>
              We will not use or share your information with anyone except as
              described in this Privacy Policy.
            </p>
            <p>
              We use your Personal Information for providing and improving the
              Service. By using the Service, you agree to the collection and use
              of information
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
