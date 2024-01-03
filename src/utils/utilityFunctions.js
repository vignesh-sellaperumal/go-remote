export const safelyParseJSON = (json) => {
  let parsed;

  try {
    parsed = JSON.parse(json);
  } catch (e) {
    console.log(e);
  }

  return parsed || null; // Could be undefined!
};

export const modifyApiData = (apiData = []) => {
  if (!apiData || apiData?.length === 0) return [];

  return apiData?.map((currentJob) => {
    return {
      id: currentJob?.id,
      url: currentJob?.url,
      title: currentJob?.title,
      company_name: currentJob?.company_name,
      company_logo: currentJob?.company_logo,
      category: currentJob?.category,
      job_type: currentJob?.job_type,
      publication_date: currentJob?.publication_date,
      candidate_required_location: currentJob?.candidate_required_location,
      salary: currentJob?.salary,
    };
  });
};
