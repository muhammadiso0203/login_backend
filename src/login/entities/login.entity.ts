import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('login')
export class Login {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar",  name: 'full_name' })
    full_name: string;

    @Column({ type: "varchar", name: 'username'})
    username: string;

    @Column({ type: "varchar",  name: 'email'})
    email: string;

    @Column({ type: "varchar", name: 'phone_number' })
    phone_number: string;

    @Column({ type: "varchar", name: 'password'})
    password: string;

    @Column({ type: "varchar", name: 'confirm_password'})
    confirm_password: string;

    @Column({ type: "varchar", name: 'gender'})
    gender: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

}
