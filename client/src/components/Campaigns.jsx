import dummyCampaigns from "../utils/dummyCampaigns";

const Campaign = () => (
    <div className="bg-gray-900">
        <div className="flex justify-center items-center py-3 flex flex-wrap w-9/12 mx-auto">
            {
                dummyCampaigns.map((campaign) => {
                    return(
                        <div key={campaign.id} className="bg-gray-700 text-gray-200 text-sm p-8 flex flex-wrap w-96 h-72 m-6 rounded-lg">
                            <div className="text-xl">{campaign.title}</div>
                            <div>{campaign.message}</div>
                            <div>{campaign.timestamp}</div>
                            <div>Donations received: {campaign.donations}</div>
                            <div>Please donate to: {campaign.address}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
  
  export default Campaign;