import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class ScheduleInterviewInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    candidateId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    jobApplicationId!: string;

    @Field(() => Date)
    @Type(() => Date)
    interviewDate!: Date;
}

export { ScheduleInterviewInput as ScheduleInterviewInput };