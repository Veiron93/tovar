interface Staff {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
}

const StaffCard = function ({ staff }: { staff: Staff }) {
    return (
        <div className="">
            {staff.first_name} {staff.last_name} {staff.middle_name}
        </div>
    );
};
export default StaffCard;
