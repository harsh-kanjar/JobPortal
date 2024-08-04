import Card from "../components/Card";
import "../css/shortlist.css";
function ShortList() {
  const shortListJobs = [
    {
      id: 1,
      title: "Toy Advertisement",
      location: "Chandigarh, Punjab",
      description:
        "Seeking a cheerful and energetic child model for a toy commercial. Must be able to express excitement and play naturally on camera.",
      date: "1st Jan 20xx",
    },
    {
      id: 2,
      title: "Toy Advertisement",
      location: "Chandigarh, Punjab",
      description:
        "Seeking a cheerful and energetic child model for a toy commercial. Must be able to express excitement and play naturally on camera.",
      date: "1st Jan 20xx",
    },
  ];
  const suggestedJobs = [
    {
      id: 1,
      title: "Toy Advertisement",
      location: "Chandigarh, Punjab",
      description:
        "Seeking a cheerful and energetic child model for a toy commercial. Must be able to express excitement and play naturally on camera.",
      date: "1st Jan 20xx",
    },
    {
      id: 2,
      title: "Toy Advertisement",
      location: "Chandigarh, Punjab",
      description:
        "Seeking a cheerful and energetic child model for a toy commercial. Must be able to express excitement and play naturally on camera.",
      date: "1st Jan 20xx",
    },
  ];
  return (
    <>
      <div className="shortlist-section-1">
        <p className="title">Shortlisted Jobs</p>
        {shortListJobs.map(({ id, title, location, description, date }) => (
          <Card
            key={id}
            title={title}
            location={location}
            description={description}
            date={date}
          />
        ))}
        <p className="subtitle">Browse similar jobs</p>
        {suggestedJobs.map(({ id, title, location, description, date }) => (
          <Card
            key={id}
            title={title}
            location={location}
            description={description}
            date={date}
          />
        ))}
      </div>
    </>
  );
}

export default ShortList;
