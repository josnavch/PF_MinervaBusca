"""empty message

Revision ID: 57b01e6c858f
Revises: 
Create Date: 2021-05-06 01:04:03.298413

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57b01e6c858f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('id_number', sa.String(length=20), nullable=False),
    sa.Column('phone', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email')
    )
    op.create_table('my_books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('is_public', sa.Boolean(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=True),
    sa.Column('authors', sa.String(length=200), nullable=False),
    sa.Column('publisher', sa.String(length=100), nullable=False),
    sa.Column('publishedDate', sa.String(length=16), nullable=False),
    sa.Column('pageCount', sa.String(length=10), nullable=False),
    sa.Column('printType', sa.String(length=20), nullable=False),
    sa.Column('categories', sa.String(length=100), nullable=False),
    sa.Column('averageRating', sa.String(length=10), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('smallThumbnail', sa.String(length=200), nullable=False),
    sa.Column('thumbnail', sa.String(length=200), nullable=False),
    sa.Column('textSnippet', sa.String(length=300), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sessionID',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('session_token', sa.String(length=150), nullable=True),
    sa.Column('duedate', sa.String(length=18), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('session_token'),
    sa.UniqueConstraint('session_token')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('sessionID')
    op.drop_table('my_books')
    op.drop_table('user')
    # ### end Alembic commands ###
